using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ExploreAngular.Model;
using System.Data;
using System.Data.SqlClient;

namespace ExploreAngular.Model
{

    public class DataAcess
    {
        string connectionString = "Data Source=DESKTOP-LCNOC8C;Initial Catalog=EmployeeDB;Integrated Security=True";


        public List<EmployeeEntity> GetEmployee()
        {

            List<EmployeeEntity> lstemployee = new List<EmployeeEntity>();
            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                SqlCommand cmd = new SqlCommand("GetEmployeeDetails", conn);
                cmd.CommandType = CommandType.StoredProcedure;

                conn.Open();
                SqlDataReader rdr = cmd.ExecuteReader();

                while (rdr.Read())
                {
                    EmployeeEntity employee = new EmployeeEntity();

                    employee.EmployeeID = Convert.ToInt32(rdr["EmployeeID"]);
                    employee.FirstName = rdr["FirstName"].ToString();
                    employee.LastName = rdr["LastName"].ToString();
                    employee.Gender = rdr["Gender"].ToString();
                    employee.Salary = rdr["Salary"].ToString();

                    lstemployee.Add(employee);
                }
                conn.Close();

            }
            return lstemployee;
        }
        public int SaveEmployee(EmployeeEntity objEmployeeEntity)
        {
            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                SqlCommand cmd = new SqlCommand("SaveEmployeeDetails", conn);
                cmd.CommandType = CommandType.StoredProcedure;

                conn.Open();
                cmd.Parameters.AddWithValue("@EmployeeID", SqlDbType.Int).Value = objEmployeeEntity.EmployeeID;
                cmd.Parameters.AddWithValue("@FirstName", SqlDbType.Int).Value = objEmployeeEntity.FirstName;
                cmd.Parameters.AddWithValue("@LastName", SqlDbType.VarChar).Value = objEmployeeEntity.LastName;
                cmd.Parameters.AddWithValue("@Gender", SqlDbType.VarChar).Value = objEmployeeEntity.Gender;
                cmd.Parameters.AddWithValue("@Salary", SqlDbType.VarChar).Value = objEmployeeEntity.Salary;
                int Result = cmd.ExecuteNonQuery();
                if (conn.State == ConnectionState.Open)
                {
                    conn.Close();
                }
                return Result;
            }
        }
    }
}
